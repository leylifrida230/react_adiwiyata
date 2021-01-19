import React from "react"
class Alert extends React.Component{
    render(){
        let color = this.props.bg;
        let style = "alert alert-" + color;
        let title = this.props.title;
        let message = this.props.children;
        return(
            <div className={style}>
                <h4 className="alert-title">{title}</h4>
                {message}
            </div>
        )
    }
}
export default Alert;