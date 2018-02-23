import {StackNavigator} from 'react-navigation'
import Hello from '../componets/Hello'
import Loadable from '../componets/Loadable'

export default StackNavigator(
    {
        Hello: {
            screen: Hello
        },
        Loadable: {
            screen: Loadable
        }
    },
    {
        initialRouteName: 'Hello'
    }
)
