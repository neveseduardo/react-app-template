
import Header from 'layouts/Home/components/Header'
import Content from 'layouts/Home/components/Content'
import Footer from 'layouts/Home/components/Footer'

function HomeLayout({ children }) {
    return (
        <>
            <Header />
            <Content>
                {children}
            </Content>
            <Footer />
        </>
    )
}

export default HomeLayout