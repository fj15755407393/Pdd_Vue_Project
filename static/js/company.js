window.onload = function () {
    // 获取当前页面的url
    var current_url=window.location.href
    let cid=current_url.split("?")[1]
    console.log(cid);
    let data = {
        cid:cid
        // company_name: "酷竞科技"
    };





    let l_height=document.querySelector(".main-left").style.height;
    let r_height=document.querySelector(".main-right").style.height;
    console.log(l_height);
    console.log(r_height);
    document.querySelector(".main-left").style.height= l_height > r_height?l_height:r_height;

    console.log(document.querySelector(".main-left").style.height);


    ajax("GET", "http://127.0.0.1:8000/company/getcompanybyid/", data, function (result) {
        // console.log(result);
        let company = result;
        console.log(company);
        loadTop()
        loadMainCompany();



        function loadTop() {
            let top = document.querySelector("div.top");
            //top信息
            // 公司基本信息1
            top.innerHTML = ` <div class="col-md-2 c-image " style="background-image: url(${company.img_src})">


        </div>

        <div class="col-md-10 top-right">
            <diV class="base">
                <!--公司的名称 和公司的官网-->
                <a href=${company.href} class="c-name">${company.c_name}</a>
                <span class="glyphicon glyphicon-paperclip"></span>
                <!--公司的关键字-->
                <div class="c-word">${company.company_word}</div>


            </diV>
            <diV class="mess">
                <div class="col-md-2 mess-item text-center item1">
                    <div class="c-count">${company.data[0]}</div>
                    <div class="c-mess">招聘职位 <span class="glyphicon glyphicon-question-sign"></span></div>
                </div>
                <div class="col-md-2 mess-item text-center item2">
                    <div class="c-count">${company.data[1]}</div>
                    <div class="c-mess">简历及时处理率 <span class="glyphicon glyphicon-question-sign"></span></div>
                </div>
                <div class="col-md-2 mess-item text-center item3">
                    <div class="c-count">${company.data[2]}</div>
                    <div class="c-mess">简历处理时间 <span class="glyphicon glyphicon-question-sign"></span></div>
                </div>
                <div class="col-md-2 mess-item text-center item4">
                    <div class="c-count">${company.data[3]}</div>
                    <div class="c-mess">面试评价 <span class="glyphicon glyphicon-question-sign"></span></div>
                </div>
                <div class="col-md-2 mess-item text-center item5">
                    <div class="c-count">${company.data[4]}</div>
                    <div class="c-mess">企业最近登录 <span class="glyphicon glyphicon-question-sign"></span></div>
                </div>


            </diV>`;

        }
        //公司主页
        function loadMainCompany() {
            // 公司简介
            let intro = document.querySelector(".text-area");
            intro.innerHTML = `${company.intro}`;
            // 公司地址
            let addr = document.querySelector("#accordion");
            for (index in company.addrs_1) {
                addr.innerHTML += ` <p>
                    <div class="addr-title" data-toggle="tooltip" data-placement="bottom" title="${company.addrs_1[index].replace(","," ")}"><span>${parseInt(index)+1}</span>
                        <a href="#collapseExample${index}" data-toggle="collapse" data-parent="#accordion" class="btn btn-link">${company.addrs_1[index].split(",")[0]}</a>
                    </div>
                    </p>
                    <div class="collapse " id="collapseExample${index}">
                        <div class=" with-padding">
                            <div class="addr-businessarea">
                                <div class="bus-item ">${company.addrs_1[index].split(",")[1].split('区')[0]}</div>
                            </div>
                            <div class="addr-desc">${company.addrs_2[index]}</div>

                        </div>
                    </div>`;




        }
        addr.innerHTML += `<hr> <div class="addr-res">
                            该公司共有 <span>${parseInt(index) + 1}</span> 个地址
                        </div>`;








            // 公司基本信息2
            let base_message = document.querySelector("ul.base-message")
            base_message.innerHTML = `
                <li class="glyphicon glyphicon-th-large">&nbsp;${company.type}</li>
                <li class="glyphicon glyphicon-grain">&nbsp;${company.rongzi}</li>
                <li class="glyphicon glyphicon-user">&nbsp;${company.size}</li>
                <li class="glyphicon glyphicon-map-marker">&nbsp;${company.addr_head}</li>`


            //管理团队

            let manager = document.querySelector("div.manager")
            //这里只放一个
            manager.innerHTML = `
                <div class="m-header" style="background-image: url(${company.manager[0].img})"></div>
                <div class="m-name">${company.manager[0].name}</div>
                <div class="m-position">${company.manager[0].positions}</div>
                <div class="m-intro">${company.manager[0].intro}</div>

            
            `;


            //公司标签
            let labels = document.querySelector(".labels");
            let company_lals = company.company_lals.split("\n");
            for (index in company_lals) {


                labels.innerHTML += `
               <div class="col-md-4 lal">${company_lals[index]}</div>
               `;
            }


        }
        //招聘职位
        function loadPosition() {
            
        }

    });


}













