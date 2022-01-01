import "./index.css"
import { useSelector } from 'react-redux';
import { RootState } from '../../../../state/reducers';

function LeftSide() {
    const state = useSelector((state: RootState) => state.bank)
    const sendMessage = () => {
        
    }
    return (<div id="left-side">
        Left side <br />
        <button onClick={sendMessage}>Send Message {state}</button>
     
    </div>)
}

export default LeftSide