import PropTypes from 'prop-types';

export const Button = ({children, ...props}) => (
    <button className='' {...props}>
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
};