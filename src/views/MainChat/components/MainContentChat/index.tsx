import "./index.css"
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../state/';
import { RootState } from '../../../../state/reducers';
function MainContentChat() {
    const state = useSelector((state: RootState) => state.bank)
    const dispatch = useDispatch();

    const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch)
    return (<div id="main-content-chat">
        Main chat content

        {/* chat input bottom */}
        <div id="chat-input-zone">
            {state}

            <button onClick={() => depositMoney(1000)}>Deposit</button>
            <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
            <button onClick={() => bankrupt()}>Bankrupt</button>
        </div>
        {/* chat input bottom */}
    </div>)
}

export default MainContentChat