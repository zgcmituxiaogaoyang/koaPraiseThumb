class PraiseButton {
    constructor(num, element, url) {
        this.num = num;
        this.element = element;
        this.url = url;
    }

    clickAction() {
        this.element.click(() => {
            if (this.num < 10) {
                this.element.css('-webkit-filter', 'grayscale(0)');
                $('#animation').addClass('num');
                this.num = add(this.num);
                setTimeout(function() {
                    $('#animation').removeClass('num');
                }, 1000);
            } else {
                this.element.css('-webkit-filter', 'grayscale(1)');
                this.num = 0;
            }
            console.log(this.num);
            // $.ajax({
            //     url:this.url,
            //     data:{
            //         num:this.num
            //     },
            //     type:'get',
            //     success:function(data){
            //         console.log(data);
            //     },
            //     error:function(){
            //         console.log("请求失败！");
            //     }
            // });
            axios.get(this.url, {
                    params: {
                        num:this.num
                    }
                })
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });
        });
    }
}


class Thumb extends PraiseButton {
    constructor(num, element, url) {
        super(num, element, url);
    }
}
export
default {
    Thumb
}
// let f= new Thumb(0,$('#thumb'));
// f.clickAction();