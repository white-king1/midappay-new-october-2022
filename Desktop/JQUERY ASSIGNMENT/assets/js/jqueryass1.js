$(function () {
    k = 2;
    $('form').on('submit', function (e) {
        e.preventDefault();
        let name = $("#name").val();
        let email = $("#email").val();
        if(name == ''){
            alert('Name and Email cannot be empty')
            return false
            
        }

        $('tbody').append(`
        
        <tr>
                <td>${k}</td>
                <td>${name}</td>
                <td>${email}</td>
            </tr>
        
        `)
        k++;
    
        $("#name").val('');
        $("#email").val('');
    })

$("#search").on("keyup",function () {
    let search = $("#search").val();
    $("#result").html(search)



    
});
});