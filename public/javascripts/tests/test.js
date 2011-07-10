$(document).ready(function(){
  module("Clean Array Function Test");
  test("Delete duplicates", function()
  {
    result = clean_array(['hola', 'hola', 'mundo']);
    ok( result.length == 2, 'Duplicates deleted');
  });
  module("Clean Array Function Test");
  test("Delete empty", function()
  {
    result = clean_array(['hola', '', 'mundo']);
    ok( result.length == 2, 'Empty deleted');
  });
});
