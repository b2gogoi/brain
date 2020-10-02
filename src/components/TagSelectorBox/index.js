import React, {Component} from 'react';
import './index.css';

function TagBox(props) {
    let tags = props.tags;

    return (
        <div className="tag-box">

            <div className="tag-filter">

            </div>

            <div className="tag-filtered-list">
                {tags.map(tag => (
                    <div key={tag} className="tag-item">
                        <input type="checkbox" value={tag} checked={props.selected.includes(tag)} onChange={()=>props.onClick(tag)} /> {tag}
                    </div>
                ))}
            </div>
        </div>
    )
}

function TagsSelected(props) {
    return (
        <div className="select-tags-box">
            Selected: {props.selected.map(tag => <div className="selected-tag" key={tag} onClick={()=>props.onClick(tag)}>{tag}</div>)}
        </div>
    )
}

export default class TagSelectorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: []
        };
    }

    handleCheck(item) {
        console.log(item, ' checked');
        const selected = this.state.selected;
        if(selected.includes(item)) {
            const index = selected.indexOf(item);
            selected.splice(index, 1);
        } else {
            selected.push(item);
        }    

        this.setState({selected: selected});
    }

    removeCheck(item) {
        console.log(item, ' removed');
        const selected = this.state.selected;
        const index = selected.indexOf(item);
        console.log(item, ' index');
        selected.splice(index, 1);
        this.setState({selected: selected});
    }

    render() {
        return (
            <>
                <h1>{this.props.name}</h1>

                <TagBox tags={this.props.tags} onClick={(item) => this.handleCheck(item)}  selected={this.state.selected} />
                <TagsSelected selected={this.state.selected} onClick={(item) => this.removeCheck(item)} />
            </>
        )
    }
};

