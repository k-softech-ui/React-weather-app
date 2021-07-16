import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.jsx'
 
Enzyme.configure({ adapter: new Adapter() });

test("testing props ",()=>{
  const wrapper = shallow(<App /> )
  expect(wrapper.find("#initial").text()).toBe("0")
})
test('Checking onClick',()=>{
  const wrapper = shallow(<App />);
  wrapper.find('button').simulate('click');
  expect(wrapper.find("#initial").text()).toBe("1")
})


