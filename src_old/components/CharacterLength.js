
const CharacterLength = (props) => {
    return <h1>The name {props.name} contains {props.name.length} characters! {props.occupation?.title}</h1>
}

export default CharacterLength;
