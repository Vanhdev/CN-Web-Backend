# CN-Web-Backend

#### Các endpoint:

##### post

###### /users/add-post : thêm bài viết (body gồm user_id, title, content)

###### /users/get-post?id= : lấy bài viết theo id, nếu id=all hoặc ALL thì lấy tất cả bài viết

###### /users/delete-post?id= : xóa bài viết theo id

###### /users/update-post?id= : chỉnh sửa bài viết

##### QAS

###### /users/add-qas: thêm câu hỏi (body gồm question, user_id)

###### /users/get-question?id= : lấy câu hỏi theo id, nếu id=all hoặc ALL thì lấy tất cả qas

###### /admin/ans-qas?id= : trả lời câu hỏi (body gồm answer)

###### /admin/delete-qas?id= : xóa câu hỏi

##### comment

###### /users/add-comment: thêm cmt (body gồm user_id, post_id, content)

###### /users/get-comment?id= : lấy danh sách comment theo id của post

###### /users/delete-comment?id= : xóa cmt

###### /users/edit-comment?id= : chỉnh sửa comment

##### rate

###### /users/add-rate: đánh giá tour (body gồm user_id, tour_id, service_rate, location_rate, price_rate, infrastructure_rate)

###### /users/get-rate?idTour= : lấy danh sách đánh giá của 1 tour và hiển thị điểm của tour

###### /users/delete-rate?idTour=?idUser= : xóa rate

###### /users/edit-rate?idTour=?idUser= : chỉnh sửa rate

##### user

###### /auth/register : đăng ký (body gồm name, email, password)

###### /auth/login : đăng nhập (body gồm email, password)

###### /users/get-user?id= : lấy thông tin người dùng

###### /users/update-user : cập nhật thông tin người dùng

##### type

###### /admin/add-type: thêm loại cho tour (body gồm name)

###### /admin/get-type?id= : lấy thông tin về type đó theo id, nếu id=all thì lấy tất cả type

###### /admin/edit-typr?id= : cập nhật type

###### /admin/delete-type?id= : xóa type

##### place

###### /admin/add-place : thêm điểm đến (body gồm name, description)

###### /admin/get-place?id= : lấy thông tin về điểm đến, id = all thì lấy danh sách place

###### /admin/edit-place?id= : cập nhật place

###### /admin/delete-place?id= : xóa place

##### voucher

###### /admin/add-voucher : thêm voucher (body gồm name, discount)

###### /admin/get-voucher?id= : lấy thông tin voucher, id=all lấy danh sách voucher

###### /admin/edit-voucher?id= : cập nhật voucher

###### /admin/delete-voucher?id= : xóa voucher

##### service

###### /admin/add-service : thêm dịch vụ (body gồm name, description)

###### /admin/get-service?id= : lấy ttin dịch vụ, id = all thì lấy ds dịch vụ

###### /admin/delete-service?id= : xóa dịch vụ

###### /admin/edit-service?id= : cập nhật dịch vụ

##### tour

###### /admin/add-tour: thêm tour (body gồm type_id, name, overview, highlight, start_date, duration, slots, price, status ,booking_deadline ,placeId ,serviceId, voucherId)

###### /admin/get-tour?id= : lấy thông tin tour, id = all lấy ds tour

###### /admin/delete-tour?id= : xóa tour

###### /admin/edit-tour?id= : cập nhật tour
