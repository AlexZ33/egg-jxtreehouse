// Tagging
$.event.addProp('dataTransfer');
$('input[data-tagging]').each(function () {
  var $input = $(this);
  var $data = $input.data();
  var $parent = $input.parent();
  var $next = $input.next();
  var $select = $next.is('div') ? $next.find('input') : $next;
  var $output = $parent.parent().find('output');
  var $span = $output.find('span:first-child');
  var $form = $input.closest('form');
  var required = $data && $data.required;
  var init = $input.val();
  var values = [];
  var index = 0;
  var value = '';
  $select.on('change', function () {
    value = $select.val();
    if (value && values.indexOf(value) === -1) {
      var $option = $parent.find('option[value="' + value + '"]');
      var $optionData = $option.data();
      if ($optionData && $optionData.empty) {
        $output.find('span > :last-child').click();
        values.length = 0;
      } else {
        var content = String($option.text() || value).trim();
        if ($data.rating) {
          content = content.replace(/\:(\d+)$/, function (str, p) {
            var score = Number(p);
            var icons = [1, 2, 3, 4, 5].map(function (level) {
              if (score >= level) {
                return '<i class="fa fa-fw fa-star"></i>';
              } else {
                return '<i class="fa fa-fw fa-star-o"></i>';
              }
            });
            return ': ' + icons.join('');
          });
        }
        $output.append($span.clone().prepend(content));
        if ($select.is('input')) {
          $select.val('');
        }
        values.push(value);
      }
    }
  });
  $output.on('click', 'span > :last-child', function () {
    var $span = $(this).parent();
    if (!required || values.length > 1) {
      index = $span.prevAll().length;
      values.splice(index, 1);
      $span.remove();
    }
  });
  $output.on('dragstart', 'span', function (event) {
    var $span = $(this);
    var content = $span.text().trim();
    if ($data.rating) {
      content += $span.find('.fa-star').length;
    }
    index = $span.prevAll().length;
    value = content;
    event.dataTransfer.setData('text/html', $span.html());
  });
  $output.on('dragover', 'span', function (event) {
    if (event.dataTransfer.types == 'text/html') {
      event.preventDefault();
    }
  });
  $output.on('drop', 'span', function (event) {
    var $target = $(event.target);
    var html = $target.html();
    var content = $target.text().trim();
    if ($data.rating) {
      content += $target.find('.fa-star').length;
    }
    if (content && value) {
      values[index] = content;
      values[$target.prevAll().length] = value;
      $target.html(event.dataTransfer.getData('text/html'));
      $output.find('span').eq(index).html(html);
    }
    return false;
  });
  $form.on('submit', function () {
    $input.val(values.join(','));
    return true;
  });
  if (init) {
    init.split(',').forEach(function (value) {
      $select.val(value).change();
    });
  }
  $select.change();
  $span.remove();
});
