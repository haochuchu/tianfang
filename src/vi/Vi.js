import React, { Component } from 'react';
import  {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './vi.css';
import Case from './../case/Case'
import './../case/case.css'
import $ from 'jquery';

class Vi extends Component {
    constructor(){
        super();
        this.state={
            pic_list:[]
        };
        this.foot={"footer":[{"foot_img":"images/slogan.png"}],"listAll":[{"list_img":"images/footer_icon_01.png"},{"list_img":"images/footer_icon_02.png"},{"list_img":"images/footer_icon_03.png"}]
        };
        /*this.list={"pic_list":[{"titb":"/Case","pics":"images/20170331053559398.jpg","after":"巴斯资本","before":"MORE"},{"titb":"?","pics":"images/20170328062938310.jpg","after":"拉斐","before":"MORE"},{"titb":"?","pics":"images/20170328063035132.jpg","after":"米兰之窗","before":"MORE"},{"titb":"?","pics":"images/20170405052252382.jpg","after":"布朗卡","before":"MORE"},{"titb":"?","pics":"images/20170405052313179.jpg","after":"创意式","before":"MORE"},{"titb":"?","pics":"images/20170327125212751.jpg","after":"伊美尔","before":"MORE"},{"titb":"?","pics":"images/20170405052405409.jpg","after":"农科院","before":"MORE"},{"titb":"?","pics":"images/20170324072603581.jpg","after":"天神娱乐","before":"MORE"},{"titb":"?","pics":"images/20170328063142669.jpg","after":"美丫妈妈","before":"MORE"},{"titb":"?","pics":"images/20170405054850489.jpg","after":"亦庄","before":"MORE"},{"titb":"?","pics":"images/20170405052350205.jpg","after":"浪奇冲浪","before":"MORE"},{"titb":"?","pics":"images/20170329070122845.jpg","after":"摩塔","before":"MORE"},{"titb":"?","pics":"images/20170405054127459.jpg","after":"赛瓦服装","before":"MORE"},{"titb":"?","pics":"images/20170405052336533.jpg","after":"恒源","before":"MORE"}]}*/
    };
	componentDidMount(){
        $.ajax({
            type:"post",
            url:"http://192.168.43.91:8100/tianfang/pic_list",
            async:"true",
            success:function(cc){
                this.setState({
                    pic_list:cc
                })
                console.log(this.state.pic_list)
            }.bind(this),
            error:function(){
                alert('失败了');
            }
        })
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
    };
    handleScroll=function (e) {
        var h=document.getElementById('home').offsetHeight-document.getElementById('head').offsetHeight;
        if(document.body.scrollTop>=h){
            document.getElementById("head").style.width='100vw';
            document.getElementById("head").style.background='#fff';
            document.getElementById("head").style.boxShadow='0 0 30px rgba(0,0,0,.1)';
            document.getElementById("img").style.marginTop='-80px';
            document.getElementById("nav").className='navs';
            
        }
        else{
            document.getElementById("head").style.width='100vw';
            document.getElementById("head").style.background='transparent';
            document.getElementById("head").style.boxShadow='';
            document.getElementById("img").style.marginTop='';
            document.getElementById("nav").className='nav';
        }
    };
	render(){
		return(
			<Router>
                <div>
                    <Route path="/Case" component={Case}></Route>
                    <Route exact path="/vi" render={()=>(

                        <div className="wrap">
                <div className="show_top"></div>
                <div className="show_bottom" id="showssss"></div>
                <div className="home_vi" id="home"></div>

                {/*content*/}
                <div className="main">
                    <h1>近期案例</h1>
                    <ul className="img_list">
                        {this.state.pic_list.map(function(xx,i){
                            return <Link key={i}  to={`/Case?${xx.id}`}><li>
                                <img src={xx.pics} />
                                <p>
                                    <span>{xx.after}</span>
                                    <span>{xx.before}</span>
                                </p>
                            </li></Link>
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
                    )}></Route>
                </div>
            </Router>
		)
	}
}

export default Vi;