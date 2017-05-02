  $(function () {

            //datepicker
            $("#datepicker").datepicker({
                constrainInput: true,
                showOn: 'button',
                buttonText: '<span class="glyphicon glyphicon-calendar"></span>'
            });

            //collapse
            $('.collapse').on('shown.bs.collapse', function () {
                $(this).parent().find('.glyphicon-menu-down').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up');
            }).on('hidden.bs.collapse', function () {
                $(this).parent().find('.glyphicon-menu-up').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');
            })

            $('.collapse').on('shown.bs.collapse', function () {
                $(this).parent().find('.glyphicon-plus-sign').removeClass('glyphicon-plus-sign').addClass('glyphicon-minus-sign');
            }).on('hidden.bs.collapse', function () {
                $(this).parent().find('.glyphicon-minus-sign').removeClass('glyphicon-minus-sign').addClass('glyphicon-plus-sign');
            })

            $('#expandall').click(function () {
                $('.panel-collapse.collapse').collapse('show');

            })

            $('#collapseall').click(function () {
                $('.panel-collapse.collapse.in').collapse('hide');

            })

            $('#showorhideall').click(function () {
                $('.panel-collapse.collapse').collapse('show');

            }).click(function () {
                $('.panel-collapse.collapse.in').collapse('hide');

            })

            //Modal
            $('#btnShowModal').click(function () {
                $('#loginModal2').modal('show');
            })

            $('#btnHideModal').click(function () {
                $('#loginModal2').modal('hide');
            })

            $('#loginModal2').on('show.bs.modal', function () {
                alert('modal is about to be displayed')
            })

            $('#loginModal2').on('shown.bs.modal', function () {
                alert('modal is displayed')
            })

            $('#loginModal2').on('hide.bs.modal', function () {
                alert('modal is about to be hidden')
            })

            $('#loginModal2').on('hidden.bs.modal', function () {
                alert('modal is hidden')
            })

            //tooltip
            $('[data-toggle="tooltip"]').tooltip()
            
            ;

        })