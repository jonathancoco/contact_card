

$(document).ready(function () {


    $('#dataEntry').submit(function()
        {
            if ( ($('#FirstName').val() == '') ||
                 ($('#LastName').val() == '') ||
                 ($('#Description').val() == ''))
            {
                var strErrorMessage = "You must specify the following: ";

                if ($('#FirstName').val() == '')
                {
                    strErrorMessage += " First Name;"
                }

                if ($('#LastName').val() == '')
                {
                    strErrorMessage += " Last Name;"
                }

                if ($('#Description').val() == '')
                {
                    strErrorMessage += " Contact;"
                }

                alert(strErrorMessage);
            }
            else
            {
                var strName = "<h2>"+ $('#FirstName').val() + " " + $('#LastName').val() + "</h2> <p>click for desc</p>";
                var strDescription = "<h2>"+ $('#Description').val() + "</h2><p>click for name</p>";
                var strHtml = "<div class='contact_card' name ='"+strName+"'' description='"+ strDescription + "' indicator='1'> ";

                strHtml += strName + "</div>";
                $('#contacts').append(strHtml);

                $('#FirstName').val('');
                $('#LastName').val('');
                $('#Description').val('');

                $('#FirstName').focus();;
            }


            return false;
        }

    )

    $('#dataClear').submit(function()
        {
            $("#contacts").html("");
            return false;
        }

    )

    $(document).on('click', '.contact_card', function(){

        if ($(this).attr("indicator") == "1")
        {
            $(this).html($(this).attr("description"));
            $(this).attr("indicator", "2");
        }
        else {
            $(this).html($(this).attr("name"));
            $(this).attr("indicator", "1");
        }
     })

})
