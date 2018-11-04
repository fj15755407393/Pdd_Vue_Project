// 页面加载
window.onload = function () {





// run
 addEventListen()


//加载标签
        ajax("GET", "http://127.0.0.1:8000/position/getlals", null, function (result) {

            loadLals();

//加载标签
















    });

//加载岗位(默认热门岗位)
        ajax("GET", "http://127.0.0.1:8000/position/getpositions", null, function (result){
        loadPositions();
        function loadPositions(min, max) {
            min=min ||0;
            max=max ||(min+9);
            let positios=result;
            // console.log(result.positions)
            // 显示岗位的个数
            let display_length=9;



            //定位到要显示的标签
            let main_body_positions=document.querySelector("div.main-body-positions") ;
            //定义变量来临时存储
            let position_labels;


            for(let index=min;index<max;index++){
                position_labels='';
                // console.log(positios[index]);
                for(let lal of positios[index].word_cut){
                    position_labels+='<div class="position_label">'+lal+'</div>';
                    // console.log(lal);
                }

                // console.log(position_labels);
                let po=positios[index];
                main_body_positions.innerHTML+=`
                    
                    <div class="position">
                    <!--岗位信息-->
                    <div class="position_info">
                        <div class="row-1">
                            <a href="../pages/position.html?${po.pid}">
                                <div class="position_name ">${po.position. slice(0,4)}</div>
                            </a>
                            <div class="pub_time">[${po.pub_date}]</div>
                            <a href="">
                                <div class="more_info"></div>
                            </a>
                            <div class="salary">${po.salary}</div>
                        </div>
                        <div class="row-2">
                            <div class="exp">${po.exp}&nbsp;</div>
                            <div class="edu">${po.edu}</div>

                        </div>
                        <div class="row-3">
                            ${position_labels}
                        </div>
                    </div>
                    <!--所属公司-->
                    <div class="company">
                        <a href="../pages/company.html?${po.cid}">
                            <div class="company_icon" style="background-image: url(${po.img_url})"></div>
                        </a>
                        <div class="company_info">
                            <a href="../pages/company.html?${po.cid}">
                                <div class="company_name">${po.company}</div>
                            </a>
                            <span>${po.com_lal.split('/')[0]}</span><span>|</span>
                            <span>${po.com_lal.split('/')[1]}</span><span>|</span>
                            <span>${po.com_lal.split('/')[2]}</span>
                        </div>
                    </div>

                </div>
                    
                    
                    
                    
                    `;

            }
            main_body_positions.innerHTML+=`
                    <div class="get-more" id="get_more_position"><a href="javascript:void(0)">
                    <div>查看更多</div>
                </a></div>`
            // main_body_positions.innerHTML=``;

            let  get_more_position=document.querySelector('#get_more_position')

            get_more_position.onclick=function () {

                console.log(min);
                get_more_position.innerHTML='';
                get_more_position.remove();
                loadPositions(min,max)

                if (min>positios.length||positios.length>min&&positios.length<max||max>=90){
                    console.log('kk');
                    document.querySelector('#get_more_position>a>div').innerHTML='已经到底了';
                }



            }
            min+=9;
            max+=9;

        }});

//加载公司

        ajax("GET", "http://127.0.0.1:8000/company/getcompanys/", null, function (result){

            let companys=result;
            // console.log(companys);

            loadCompany()

function loadCompany(min,max) {
    min=min||0;
    max=max||9;
    let mainb_ody_companies=document.querySelector('div.main-body-companies')
    for(let index=min;index<companys.length&&index<max; index++){
        let com=companys[index];
        // console.log(com);

        mainb_ody_companies.innerHTML+=`
            
            <div class="company-item" id=${com.cid}>
                        <div class="company-message">
                            <!--公司头像-->
                            <a href="">
                                <div class="company-images"></div>
                            </a>
                            <!--公司名字-->
                            <a href="../pages/company.html?${com.cid}">
                                <div class="name">${com.c_name}</div>
                            </a>
                            <div class="other">
                                <!--类型-->
                                <span class="type">${com.type}</span>
                                <!--融资-->
                                <span class="rongzi">${com.rongzi}</span>
                            </div>
                            <!--简介-->
                            <div class="intro">
                                <p>${com.company_word.slice(0,15)}...</p>
                            </div>

                        </div>
                        <div class="data">
                            <div class="data-1">
                                <span>${com.data[3]}</span>
                                <a href="#">面试评价</a>
                            </div>
                            <div class="data-2">
                                <span>${com.data[0]}</span>
                                <a href="#">在招职位</a>
                            </div>
                            <div class="data-3">
                                <span>${com.data[1]}</span>
                                <a href="#">简历处理率</a>
                            </div>
                        </div>


                    </div>`;

        let imga_url='url("'+com.img_src+'")';
        // console.log(imga_url);
        document.getElementsByClassName('company-images')[index].style.backgroundImage =imga_url;

    }


    mainb_ody_companies.innerHTML+=`
 <div class="get-more" id="get_more_company"><a href="javascript:void(0)">
                        <div>查看更多</div>
                    </a></div>`



    let get_more_company=document.querySelector('#get_more_company');
    get_more_company.onclick=function () {
        get_more_company.innerHTML='';
        get_more_company.remove();
        loadCompany(min,max)

        if (min>companys.length||companys.length>min&&companys.length<max){
            console.log('kk');
            document.querySelector('#get_more_company>a>div').innerHTML='已经到底了';
        }


    };
    min+=9;
    max+=9;
}


        });




//添加事件




    function addEventListen() {


     //搜索按钮

        search_btn=document.querySelector('div.btn');
        input_box=document.querySelector('div.input>input');

        search_btn.onclick=function () {
            res=input_box.value
            console.log(res);

        }

















    }





}

