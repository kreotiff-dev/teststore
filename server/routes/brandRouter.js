const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRole = require("../middleware/checkRoleMiddleware")

/**
 * @swagger
 * /api/brand:
 *  post:
 *      summary: Add new brand
 *      tags:
 *          - API functions
 *      parameters:
 *      - name: "id"
 *      required: true
 *      schema:
 *          type: string
 *          example: string
 *      responses:
 *          '200':
 *              description: OK
 *              schema:
 *              type: string
 *              example: "some text"
 *  get:
 *      summary: Get All brands
 *      responses:
 *          '200':
 *              description: Success
 *
 *
 */
router.post('/', checkRole('ADMIN'), brandController.create)
router.get('/',brandController.getAll)

module.exports = router