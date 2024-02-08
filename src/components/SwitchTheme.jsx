import * as Switch from '@radix-ui/react-switch';
import { useTheme } from '../Context/ThemeContext';


function SwitchTheme() {
  const { state, dispatch } = useTheme();

  function toggleTheme() {
    dispatch({ type: 'TOGGLE_THEME'})
  }

  return (
    <>
      <img className='w-10 h-10 self-center' src="/light.png" alt="" />
      <Switch.Root
        checked={state.theme === 'dark'}
        className={`w-[42px] h-[25px] flex self-center bg-sky-400 rounded-full shadow-[0_1px_10px] ${state.theme === 'light' ? 'shadow-sky-700' : 'shadow-red-500'} focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-red-500 outline-none`}
        style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
        onClick={toggleTheme}
      >
        <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
      <img className='w-10 h-10 self-center' src="/dark.png" alt="" />
    </>
  )
}

export default SwitchTheme;