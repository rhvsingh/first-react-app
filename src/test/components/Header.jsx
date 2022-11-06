import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({onAddToggle,title,addTaskToggle}) => {
  return (
    <div className='d-flex justify-between py-1'>
        <div className='main-heading'>{title}</div>
        <Button  onClick={onAddToggle} color={addTaskToggle ? "red" : "green"} title={addTaskToggle ? "Close" : "Add"} />
    </div>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header