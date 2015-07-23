function base64(string) {
  return window.btoa(unescape(encodeURIComponent(string)))
}
var exportBtn;
function init() {
  exportBtn = document.querySelectorAll('.export-button')[0];
  // exportBtn.addEventListener('click', exportHandler);
}
function exportHandler() {
 
  // var tables = this.$('table')
  //   , table = null;
  // tables.each(function (i) {
  //   var t = $('<table><thead></thead><tbody></tobdy></table>');
  //   t.find('thead').html(this.tHead.innerHTML);
  //   t.find('tbody').append($(this.tBodies).children(':visible').clone());
  //   t.find('.not-print').remove(); // not-print 是@media print中不会打印的部分
  //   t.find('a').replaceWith(function (i) { // 表格中不再需要的超链接也移除了
  //     return this.innerHTML;
  //   });
  //   table = table ? table.add(t) : t;
  // });
  var table = document.getElementsByTagName('table')[0];
  var uri = 'data:application/vnd.ms-excel;base64,';
  var arr = [];
  arr.push('<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head>');
  arr.push('<meta http-equiv=Content-Type content="text/html; charset=utf-8">');
  arr.push('<meta name=ProgId content=Excel.Sheet>');
  arr.push('<meta name=Generator content="Microsoft Excel 15">');
  arr.push('<!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>');
  arr.push('test');
  arr.push('</x:Name>');

  arr.push('<x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorkbook></xml><![endif]--></head><body><table>');
  arr.push('<thead><tr class="fam"><th>日期</th></tr></thead><tbody><tr><td>2015-04-09</td></tr></tbody>');
  arr.push('</table></body></html>');
  exportBtn.href = uri + base64(arr.join(''));//  tableToExcel(table, '广告数据');
}


window.onload = function () {
  init();
  exportHandler();
}