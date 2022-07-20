import request from '@/utils/request'

// 商品列表数据
export const getCommodity = (params) => {
  return request({
    method: 'GET',
    url: 'goods',
    params
  })
}

// 根据ID查询商品
export const queryCommodity = (id) => {
  return request({
    method: 'GET',
    url: `goods/${id}`
  })
}

// 删除商品
export const removeCommodity = (id) => {
  return request({
    method: 'DELETE',
    url: `goods/${id}`
  })
}