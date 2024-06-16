

const TabItem = ({label, children}) => {
	return (
		<div className="component-tab-item">
			<button>{label}</button>
			<section className="component-tab-item__content">{children}</section>
		</div>
	)
}

export default TabItem;
