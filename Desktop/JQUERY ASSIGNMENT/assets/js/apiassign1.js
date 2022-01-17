$(function () {
    let block = $('.row');
    block.html(' <img src="loading.gif" alt="">')
    $.get('https://jsonplaceholder.typicode.com/photos')
        .done(function (response) {
            let identity = response;
            block.html('');
            // console.log(identity[1].id);
            // $('#album').html(identity[1].id);
            // $('#title').html(identity[1].title);
            identity.forEach(pictures => {
                // console.log(pictures.id)
                block.append(`
                    <div class="col-md-3 text-center">
                        <div class="card card-body shadow mb-3" style="background-image: url(${pictures.url});">
                            
                                <h4  id="album"  class="mb-0"> ${pictures.id} </h4>
                                <p id="title"> <i class="fas fa-picture text-danger"></i>${pictures.title}</p>
                                
                                <button class="btn btn-outline-secondary btn-sm px-5">
                                    View <i class="fa fa-arrow-circle-right"></i>
                
                                </button>
                        </div>
                    </div>
            
            `)

            

        })

        .fail(function (x, h, err) {
            console.log(err, 'here')
        })
    });    
})