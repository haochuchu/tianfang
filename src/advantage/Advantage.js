import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './advantage.css';
import $ from 'jquery';

class Advantage extends Component {
    constructor(){
        super();
        this.foot={"footer":[{"foot_img":"images/slogan.png"}],"listAll":[{"list_img":"images/footer_icon_01.png"},{"list_img":"images/footer_icon_02.png"},{"list_img":"images/footer_icon_03.png"}]
        };
        this.data={"cont":[{"img":"images/ys_01.png","title":"零风险合作模式","eng":"Zero risk cooperation mode","w_one":"侧重以结果为服务导向","w_two":"设计率先推出设计稿不满意全部退款客户零风险合作模式","w_three":"最大限度降低客户的合作风险","w_four":"从不青睐于向您虚夸我们的设计能力如果量身设计的作品让您满意","w_five":"我们相信合作的基础会更加夯实","w_six":"这也是设计自信的最佳体现！"},{"img":"images/ys_02.png","title":"坚持定位至上的设计理念","eng":"ADHERE TO THE POSITIONING OF THE SUPREMACY OF THE DESIGN CONCEPT","w_one":"自创建以来","w_two":"始终坚持以定位为核心的发展方向","w_three":"我们深知设计不仅仅是满足视觉上的审美依赖","w_four":"更多是基于信息传播与受众行为的思考，设计应是有目标的创作行为","w_five":"精于设计","w_six":"更擅长您的品牌传播之道"},{"img":"images/ys_03.png","title":"强调受众感受的视觉体验","eng":"THE AUDIENCE FEEL STRESSED VISUAL EXPERIENCE","w_one":"我们坚信精细而恰当的体验设计","w_two":"可以使信息的传达更具魅力，印象更","w_three":"加深刻 ","w_four":"将精美的形象设计和创意进行融合 ","w_five":"会带来更加愉悦的体验 ","w_six":"使形象流露出独有的品牌特性"},{"img":"images/ys_04.png","title":"保证设计与销售预期的高度统一","eng":"ADD ENTRY CONTENT INFORMATION 100%","w_one":"我们保证以终为始的逆向推导思路 ","w_two":"做以实现销售增长为目的的“有效设计”我们将结合品牌定位和受众需求进行研究，告别“为了设计而设计” ","w_three":"当然  ","w_four":"这样做的目的不仅仅因为我们擅长设","w_five":"计与排版","w_six":"而是为用户提供更加有效的服务"},{"img":"images/ys_05.png","title":"设计前期品牌定位如此重要","eng":"PRELIMINARY DESIGN BRAND POSITIONING IS SO IMPORTANT","w_one":"设计在了解客户需求的前提下 ","w_two":"会将客户需求进行细致的挖掘与分析根据不同需求将设计的各个层面进行全面规划说明","w_three":"设计坚持不做“十分钟搞定的无营养","w_four":"样板方案” ","w_five":"确保每一份方案都量身定制","w_six":"并且这项服务是免费的！"}]
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
        setTimeout(function(){
          document.getElementById("showsss").style.display="none";
        },900);
    };
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
    };
	render(){
		return(
			<div className="wrap">
				<div className="show_top"></div>
                <div className="show_bottom" id="showsss"></div>
                <div className="home_advantage" id="home"></div>

                {/*content*/}
                <div className="main">
                    <h3 className="Title">ADVANTAGE</h3>
                    <ul className="zero">
                        {this.data.cont.map(function(con,i){
                                return <li><div className="L_img"><img src={con.img} /></div><div className="R_con"><h3>{con.title}</h3><div className="R_word"><span>{con.eng}</span><h5 className="cn"><p>{con.w_one}</p><p>{con.w_two}</p><p>{con.w_three}</p><p>{con.w_four}</p><p>{con.w_five}</p><p>{con.w_six}</p></h5></div></div>
                                </li>
                        })}
                    </ul>
                     {/*contact*/}
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

export default Advantage;