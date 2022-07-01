const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRole = require("../middleware/checkRoleMiddleware")



/**
 * @swagger
 * components:
 *  schemas:
 *      Brand:
 *          type: object
 *          required:
 *              - name
 *          properties:
 *              id:
 *                  type: integer
 *                  format: int64
 *                  description: id brand
 *              name:
 *                  type: string
 *                  description: name brand
 *           example:
 *              id: 1102
 *              name: Vivo
 *              updatedAt: 2022-06-30T17:36:59.924Z
 *              createdAt: 2022-06-30T17:36:59.924Z
 *
 *
 */

/**
 * @swagger
 * /api/brand:
 *  post:
 *      descriptions: Add new brand
 *      responses:
 *          '200':
 *              description: Success
 *              contents:
 *                  application/json:
 *                      schema:
 *                              $ref: '#/components/schemas/Brand'
 *  get:
 *      descriptions: Get All brands
 *      responses:
 *          '200':
 *              description: Success
 *
 */
router.post('/', checkRole('ADMIN'), brandController.create)
router.get('/',brandController.getAll)

module.exports = router