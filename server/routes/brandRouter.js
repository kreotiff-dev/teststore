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
 *                  description: id производителя
 *              name:
 *                  type: string
 *                  description: Наименорвание производителя
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
 *      descriptions: Используется для добавления нового брэнда
 *      responses:
 *          '200':
 *              description: Успешное выполнение запроса
 *              contents:
 *                  application/json:
 *                      schema:
 *                              $ref: '#/components/schemas/Brand'
 *  get:
 *      descriptions: Используется для получения списка всех брэндов
 *      responses:
 *          '200':
 *              description: Успешное выполнение запроса
 *
 */
router.post('/', checkRole('ADMIN'), brandController.create)
router.get('/',brandController.getAll)

module.exports = router