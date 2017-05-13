import React from 'react';

class Section extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            opacClass: this.props.myClass,
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll);
    }
    handleScroll(event){

        let winPos = window.pageYOffset,
            section = document.getElementById(this.props.id),
            secPos = section.offsetTop,
            height = section.getBoundingClientRect().height,
            tot = height + secPos;

        if ( winPos >= secPos && winPos <= tot ){
            this.setState({opacClass: this.props.myClass + " hovered"});
        }else{
            this.setState({opacClass: this.props.myClass});
        }
    }

    render(){
        return(
            <div className={this.props.sectionCLass} id={this.props.id}>
                <div className={this.state.opacClass}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Section;
