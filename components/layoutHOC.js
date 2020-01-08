import Header from './header';

const layoutStyles = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const withLayout = Page => {
    return () => (
        <div style={layoutStyles}>
            <Header />
            <Page />
        </div>
    )
};

export default withLayout;