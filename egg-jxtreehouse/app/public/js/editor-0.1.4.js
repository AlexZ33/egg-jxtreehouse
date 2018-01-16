
var editor = {};
if (localStorage.editor) {
    editor = JSON.parse(localStorage.editor);
} else {
  var today = new Date().toISOString();
  editor = {
    created: today,
    updated: today,
    content: ''
  };
}

$('.summernote').summernote({
  height: 400,
  lang: 'zh-CN',
  toolbar: [
    ['style', ['style', 'fontname', 'fontsize', 'color', 'height']],
    ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript']],
    ['paragraph', ['paragraph']],
    ['list', ['ul', 'ol']],
    ['table', ['table']],
    ['insert', ['hr', 'link', 'picture', 'video', 'file']],
    ['action', ['undo', 'redo', 'clear']],
    ['view', ['save', 'trash', 'fullscreen', 'codeview', 'help']]
  ],
  callbacks: {
    onInit: function () {
      var $summernote = $(this);
      var $editor = $summernote.next();
      var code = $summernote.summernote('code');
      var markup = code.replace(/(<p><br\/?><\/p>\s*)+$/, '');
      if (!(markup || $('<div>' + markup + '</div>').text())) {
        var content = editor.content;
        if (!$(content).text()) {
          content = $summernote.attr('placeholder');
        }
        $summernote.summernote('code', content);
      }
      if ($editor.is('.note-editor')) {
        var $checkbox = $editor.find('label.custom-checkbox');
        var id = $checkbox.attr('for') + '-' + Date.now();
        var input = '<input type="checkbox" class="custom-control-input" id="' + id + '" checked>';
        var label = '<label class="custom-control-label" for="' + id + '">在新窗口打开</label>';
        var div = '<div class="custom-control custom-checkbox">' + input + label + '</div>';
        $checkbox.parent().append(div);
        $checkbox.remove();
      }
    },
    onFocus: function () {
      var $summernote = $(this);
      var placeholder = $summernote.attr('placeholder');
      var content = $summernote.summernote('code');
      if (content === placeholder) {
        $summernote.summernote('code', '');
      }
    },
    onImageUpload: function (files) {
      var $summernote = $(this);
      var csrf = $summernote.data('csrf');
      $.each(files, function (index, file) {
        var data = new FormData();
        data.append('file', file);
        $.ajax({
          data: data,
          type: 'POST',
          url: '/auth/upload?_csrf=' + csrf,
          cache: false,
          contentType: false,
          processData: false,
          success: function (result) {
            $summernote.summernote('insertImage', result.url, file.name);
          }
        });
      });
    }
  },
  buttons: {
    file: function (context) {
      var index = $('.note-view > button > .fa-cloud-upload').length;
      var $summernote = $('.summernote').eq(index);
      var button = $.summernote.ui.button({
        contents: '<i class="fa fa-cloud-upload" data-toggle="modal" data-target="#note-file-modal"/>',
        tooltip: '文件',
        click: function () {
          var $modal = $('#note-file-modal');
          var $url = $modal.find('input[name="url"]');
          var $button = $modal.find('.note-btn');
          $modal.show();
          $button.on('click', function () {
            var url = $url.data('url');
            var name = $url.data('name');
            if (url && name) {
              context.invoke('editor.createLink', {
                text: name,
                url: url,
                isNewWindow: true,
              });
              $modal.hide();
            }
          });
          $modal.find('.close').on('click', function () {
            $modal.hide();
          });
        },
      });
      return button.render();
    },
    save: function (context) {
      var index = $('.note-view > button > .fa-save').length;
      var $summernote = $('.summernote').eq(index);
      var button = $.summernote.ui.button({
        contents: '<i class="fa fa-save"/>',
        tooltip: '本地存储',
        click: function () {
          editor.updated = new Date().toISOString();
          editor.content = $summernote.summernote('code');
          localStorage.editor = JSON.stringify(editor);
        },
      });
      return button.render();
    },
    trash: function (context) {
      var index = $('.note-view > button > .fa-trash').length;
      var $summernote = $('.summernote').eq(index);
      var button = $.summernote.ui.button({
        contents: '<i class="fa fa-trash"/>',
        tooltip: '清空内容',
        click: function () {
          editor.updated = new Date().toISOString();
          editor.content = '';
          localStorage.editor = JSON.stringify(editor);
          $summernote.summernote('code', '');
        },
      });
      return button.render();
    }
  }
});

$(function () {
  var $modal = $('#note-file-modal');
  var csrf = $modal.data('csrf');
  var $file = $modal.find('input[name="file"]');
  var $icon = $modal.find('.fa-spinner');
  var $url = $modal.find('input[name="url"]');
  var $button = $modal.find('.note-btn');
  var $close = $modal.find('.close');
  $file.on('change', function () {
    var file = $file.get(0).files[0];
    var data = new FormData();
    data.append('file', file);
    $icon.removeClass('d-none');
    $.ajax({
      data: data,
      type: 'POST',
      url: '/auth/upload?_csrf=' + csrf,
      cache: false,
      contentType: false,
      processData: false,
      success: function (result) {
        var url = result.url;
        var dataString = '';
        $icon.addClass('d-none');
        $button.removeClass('disabled');
        $button.on('click', function () {
          dataString = $url.val();
          document.execCommand('copy');
          $file.val('');
          $url.val('');
          $close.click();
        });
        document.addEventListener('copy', function (event) {
          event.clipboardData.setData('text/plain', dataString);
          event.preventDefault();
        });
        $url.data('name', file.name);
        $url.data('url', url);
        $url.val(url);
      }
    });
  });
  $('.summernote').each(function () {
    var $summernote = $(this);
    var $form = $summernote.closest('form');
    $form.on('submit', function () {
      var content = $summernote.val();
      var text = $('<div>' + content + '</div>').text();
      var placeholder = $summernote.attr('placeholder');
      if (text !== placeholder) {
        content = content.replace(/(<p><br\/?><\/p>\s*)+$/, '');
      } else {
        content = '';
      }
      $summernote.val(content);
      return true;
    });
  });
});
