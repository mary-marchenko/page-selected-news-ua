"use strict";

// filter active
var filterItem = document.querySelectorAll('.filter__item');
filterItem.forEach(function (block) {
  block.addEventListener('click', function () {
    if (block.classList.contains('active')) {
      block.classList.remove('active');
    } else {
      filterItem.forEach(function (item) {
        return item.classList.remove('active');
      });
      block.classList.add('active');
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZmlsdGVySXRlbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJibG9jayIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsIml0ZW0iLCJhZGQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxJQUFJQSxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0FBRTNERixVQUFVLENBQUNHLE9BQU8sQ0FBQyxVQUFBQyxLQUFLLEVBQUk7RUFDeEJBLEtBQUssQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDbEMsSUFBSUQsS0FBSyxDQUFDRSxTQUFTLENBQUNDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtNQUNwQ0gsS0FBSyxDQUFDRSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDcEMsQ0FBQyxNQUFNO01BQ0hSLFVBQVUsQ0FBQ0csT0FBTyxDQUFDLFVBQUFNLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUNILFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUFBLEVBQUM7TUFDM0RKLEtBQUssQ0FBQ0UsU0FBUyxDQUFDSSxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ2pDO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaWx0ZXIgYWN0aXZlXG5sZXQgZmlsdGVySXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2l0ZW0nKTtcblxuZmlsdGVySXRlbS5mb3JFYWNoKGJsb2NrID0+IHtcbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGJsb2NrLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlsdGVySXRlbS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7Il19
