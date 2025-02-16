document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // modal box for delete category confirmation
    let modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    // datepicker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmm, yyyy",
        i18n: {done: "Select"}
    });

    // select initialization
    var selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
   
  });

  