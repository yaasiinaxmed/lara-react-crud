import ProductController from './ProductController'
import Settings from './Settings'
import Auth from './Auth'

const Controllers = {
    ProductController: Object.assign(ProductController, ProductController),
    Settings: Object.assign(Settings, Settings),
    Auth: Object.assign(Auth, Auth),
}

export default Controllers