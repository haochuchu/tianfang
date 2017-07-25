import React, { Component } from 'react';
import  {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './vi.css';
import Case from './../case/Case';
import './../case/case.css';
import $ from 'jquery';

class Vi extends Component {
    constructor(){
        super();
        this.state={
            pic_list:[]
        };
        this.foot={"footer":[{"foot_img":"images/slogan.png"}],"listAll":[{"list_img":"images/footer_icon_01.png"},{"list_img":"images/footer_icon_02.png"},{"list_img":"images/footer_icon_03.png"}]
        };
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
                                )}>
                    </Route>
                </div>
            </Router>
		)
	}
}

export default Vi;