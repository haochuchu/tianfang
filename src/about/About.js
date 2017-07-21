import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './about.css';
import $ from 'jquery';

class About extends Component {
    constructor(){
        super();
        this.data={"brand":[{"title":"ABOUT","con":"天坊创意品牌策划机构","All":"天坊创意(北京)品牌策划是一家具备国内前瞻视野的综合性品牌战略咨询和品牌策划机构。10年的行业沉淀，7年的品牌服务实战经验，曾为国内数百家企业提供系统的品牌设计及整合传播服务，提供品牌策略+设计+亮相落地的综合服务","img":"images/gywm_01.jpg"}]
        },
        this.date={"grow":[{"grow_title":"用细节与厚度见证成长","grow_con":"天坊品牌策划迎来多少新同事，又走过多少不凡同仁。有的成为社会重要担当，有的初露峥嵘，有的正在同我们一起成长。他们都是带有个性色彩的标签，优秀而不可替代。用自己的热情与才华丰富着天坊品牌的细节与厚度！","grow_sign":"Go to all lengths Mutual Symbiosis","grow_img":"images/about_02.jpg"}],"journey":[{"news_first":"寒来暑往，十载春秋！","news_nth":"2017年，天坊品牌策划机构迎来建立第十年，回望十年征程，见证我们的成长。","news_last":"不同于单纯的管理咨询公司和设计公司，天坊专注于为客户创造和管理品牌，提供从品牌资产研究、市场洞察、品牌机会分析、品牌战略、品牌组合规划、命名和语词创作、设计（包括品牌识别、展览展示、环境空间导示、包装、网络形象设计等）到内部品牌导入、品牌管理制度建设的综合性服务，以提升客户在海内外的品牌影响力。"}],"made":[{"made_title":"品牌创意是天坊设计团队的唯一宗旨，出众的设计精英，专注于做企业的品牌提升伙伴，完整的传达用户的个性和风格。","mode_word":"Talefant brand design","mode_news":"因用户而诞生，量身定制"}]
        },
        this.foot={"footer":[{"foot_img":"images/slogan.png"}],"listAll":[{"list_img":"images/footer_icon_01.png"},{"list_img":"images/footer_icon_02.png"},{"list_img":"images/footer_icon_03.png"}]
        }
    };
	componentDidMount(){
        //回到顶部
        $(function(){
            $('.blocks').click(function(){
                $('body').animate({scrollTop:0},function(){
                    return false;
                })
            });
        })
        var backs=document.getElementById("backs");
        backs.onclick=function(){
            (document.body.scrollTop=0) || (document.documentElement.scrollTop=0);
        }
        document.addEventListener('scroll', this.handleScroll.bind(this));
        lunbo(document.querySelectorAll('.interact')[0],1060);
        function lunbo(element,FWidth){
            var interact=element,
            lb=interact.querySelector('.lb'),
            li=lb.querySelectorAll('li'),
            LBtn=interact.querySelector('.LBtn'),
            RBtn=interact.querySelector('.RBtn');
            interact.style.width=FWidth+"px";  
                for(var i=0; i<li.length; i++){
                    li[i].style.width=FWidth+"px";
                }
            lb.style.width=FWidth*li.length+"px";
            var liW=parseInt(getComputedStyle(li[0]).width);
            var imgNum=0,//初始化为0；//图片移动次数计数器；
                aniTime,//定时器
                lastNum=0,//图片每次移动距离计数器
                flag=true;//按钮事件开关
            //右键点击事件
            RBtn.onclick=function(){
                if(flag){
                    flag=false;
                    if(imgNum>=li.length-1){
                    lb.style.marginLeft="0px";//sum=sum-1;
                    imgNum=0;
                    }
                    animation(-1060,FWidth);
                    imgNum++;     
               }
            }
        //左键点击事件
        LBtn.onclick=function(){
            if(flag){
                flag=false;
                if(imgNum<=0){
                lb.style.marginLeft=-parseInt(getComputedStyle(lb).width)+1060+'px';
                imgNum=li.length-1;
                }
                animation(1060,FWidth);//移动距离
                imgNum--;
            }
        }
                  
        //动画函数
        function animation(everyMove,liW){        //绝对值math.abs
                var moveNum=Math.abs(parseInt(liW/everyMove));  
                aniTime=setInterval(function(){//定时器；
                    if(lastNum>=moveNum){
                        clearInterval(aniTime);
                        lastNum=0;
                        flag=true;
                        return;       
                        }
                    lb.style.marginLeft=parseInt(getComputedStyle(lb).marginLeft)+everyMove+"px";//封装的代码//animation;
                    lastNum++;
                },120);
            }
            var autoTime;
        function autoPlay(){
            autoTime=setInterval(function(){
            RBtn.onclick();
            },5000);
        }
        autoPlay();
        interact.onmouseover=function(){
            clearInterval(autoTime);
        }   
        interact.onmouseout=function(){
            autoPlay();
        }   
        }
        
    } 
    handleScroll=function (e) {
        var h=document.getElementById('home').offsetHeight-document.getElementById('head').offsetHeight;
        if(document.body.scrollTop>=h){
            document.getElementById("head").style.width='100vw';
            document.getElementById("head").style.background='#fff';
            document.getElementById("head").style.boxShadow='0 0 30px rgba(0,0,0,.1)';
            document.getElementById("img").style.marginTop='-80px';
            document.getElementById("title").style.color='#000';
            document.getElementById("nav").className='navs';
            
        }
        else{
            document.getElementById("head").style.width='100vw';
            document.getElementById("head").style.background='transparent';
            document.getElementById("head").style.boxShadow='';
            document.getElementById("img").style.marginTop='';
            document.getElementById("nav").className='nav';
            document.getElementById("title").style.color='#fff';
        }
    }
	render(){
		return(
			<div className="wrap">
                {/*banner*/}
				<div className="home_about" id="home"></div>
				<div className="show_top"></div>
                <div className="show_bottom" id="showss_box"></div>
                 {/*content*/}
                <div className="about_content">
                    <div className="fixed_box">
                        {this.data.brand.map(function(brand,i){
                                    return (
                                        <div className="brand">
                                            <h2>{brand.title}<span>{brand.con}</span></h2>
                                            <p>{brand.All}</p>
                                        </div>
                                    )
                                })}
                        {this.data.brand.map(function(brand,i){
                                    return ( <div className="character"> 
                                            <img src={brand.img}/>
                                        </div>
                                    )
                                })}
                        <div className="grow">
                            {this.date.grow.map(function(grow,i){
                                        return (  
                                            <div className="grow_witness">
                                                <h2>{grow.grow_title}</h2>
                                                <p>{grow.grow_con}</p>
                                                <h4>{grow.grow_sign}</h4>
                                            </div>
                                        )
                                    })}
                            {this.date.grow.map(function(grow,i){
                                        return (  
                                            <div className="grow_all">
                                               <img src={grow.grow_img}/>
                                            </div>
                                        )
                                    })}
                        </div>
                       <div className="journey">
                            {this.date.journey.map(function(journey,i){
                                        return (  
                                            <div>
                                              <p>{journey.news_first}</p>
                                              <p>{journey.news_nth}</p>
                                              <p>{journey.news_last}</p>
                                            </div>
                                        )
                                    })}
                       </div>
                       <div className="interact">
                           <ul className="lb">
                                <li><img src="images/fw_01.jpg" alt=''/></li>
                                <li><img src="images/fw_02.jpg" alt=''/></li>
                                <li><img src="images/fw_03.jpg" alt=''/></li>
                                <li><img src="images/fw_04.jpg" alt=''/></li>
                                <li><img src="images/fw_05.jpg" alt=''/></li>
                                <li><img src="images/fw_banner_05.jpg" alt=''/></li>
                                <li><img src="images/fw_01.jpg" alt=''/></li>
                           </ul>
                            <div className="LBtn btn">&lt;<div className="fliament_left"></div></div>
                            <div className="RBtn btn">&gt;<div className="fliament_right"></div></div>
                            <div className="flia_left"></div>
                            <div className="car">
                                <img src="images/fw_icon_01.png"/>
                                <span className="car_move"><img src="images/fw_icon_02.png"/></span>
                            </div>
                            <div className="flia_right"></div>
                       </div>
                       <div className="made">
                            {this.date.made.map(function(made,i){
                                        return (  
                                            <div>
                                              <p>{made.made_title}</p>
                                              <h4>{made.mode_word}</h4>
                                              <h4>{made.mode_news}</h4>
                                            </div>
                                        )
                                    })}
                       </div>
                    </div>
                </div>
                <div className="contact">
                            {this.foot.footer.map(function(foot,i){
                                    return (
                                            <div className="contact_top">
                                                <img src={foot.foot_img}/>
                                            </div>
                                    )
                              })};
                            
                             <ul className="contact_ul">
                                {this.foot.listAll.map(function(list,i){
                                    return <li><a><img src={list.list_img}/></a></li>
                                })}
                             </ul>
                             
                            <div className="contact_word">
                                <h5>HOT LINE</h5>
                                <h3 className="light">400·8167·995</h3>
                            </div>
                </div>
                <div className="Rt_top">
                    <p id="backs">
                        <Link to="/"><img src="images/go_back.jpg" alt="" /></Link>
                    </p>
                    <p className="blocks">
                        <img src="images/gotop.jpg" alt="" />
                    </p>
                </div>
			</div>

		)
	}
}

export default About;