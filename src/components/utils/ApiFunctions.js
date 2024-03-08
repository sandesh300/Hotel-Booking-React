import axios from "axios"

export const api = axios.create({
	baseURL: "http://localhost:8080"
})

// export const getHeader = () => {
// 	const token = localStorage.getItem("token")
// 	return {
// 		Authorization: `Bearer ${token}`,
// 		"Content-Type": "application/json"
// 	}
// }

/* This function adds a new room room to the database */
export async function addRoom(photo, roomType, roomPrice) {
	const formData = new FormData()
	formData.append("photo", photo)
	formData.append("roomType", roomType)
	formData.append("roomPrice", roomPrice)

	const response = await api.post("/rooms/add/new-room", formData,{
		// headers: getHeader()
	})
	if (response.status === 201) {
		return true
	} else {
		return false
	}
}

/* This function gets all room types from thee database */
export async function getRoomTypes() {
	try {
		const response = await api.get("/rooms/room/types")
		return response.data
	} catch (error) {
		throw new Error("Error fetching room types")
	}
}
/* This function gets all rooms from the database */
export async function getAllRooms() {
	try {
		const result = await api.get("/rooms/all-rooms")
		return result.data
	} catch (error) {
		throw new Error("Error fetching rooms")
	}
}

/* This function deletes a room by the Id */
export async function deleteRoom(roomId) {
	try {
		const result = await api.delete(`/rooms/delete/room/${roomId}`, {
			// headers: getHeader()
		})
		return result.data
	} catch (error) {
		throw new Error(`Error deleting room ${error.message}`)
	}
}

/* This function update a room */
export async function updateRoom(roomId, roomData) {
	const formData = new FormData()
	formData.append("roomType", roomData.roomType)
	formData.append("roomPrice", roomData.roomPrice)
	formData.append("photo", roomData.photo)
	const response = await api.put(`/rooms/update/${roomId}`, formData,{
		// headers: getHeader()
	})
	return response
}

/* This function gets a room by Id*/
export async function getRoomById(roomId) {
	try {
		const result = await api.get(`/rooms/room/${roomId}`)
		return result.data
	} catch (error) {
		throw new Error(`Error fetching room ${error.message}`)
	}
}

/* This function saves a new booking to the database */
export async function bookRoom(roomId, booking) {
	try {
		const response = await api.post(`/bookings/room/${roomId}/booking`, booking)
		return response.data
	} catch (error) {
		if (error.response && error.response.data) {
			throw new Error(error.response.data)
		} else {
			throw new Error(`Error booking room : ${error.message}`)
		}
	}
}

/* This function gets alll bokings from the database */
export async function getAllBookings() {
	try {
		const result = await api.get("/bookings/all-bookings", {
			// headers: getHeader()
		})
		return result.data
	} catch (error) {
		throw new Error(`Error fetching bookings : ${error.message}`)
	}
}

/* This function get booking by the cnfirmation code */
export async function getBookingByConfirmationCode(confirmationCode) {
	try {
		const result = await api.get(`/bookings/confirmation/${confirmationCode}`)
		return result.data
	} catch (error) {
		if (error.response && error.response.data) {
			throw new Error(error.response.data)
		} else {
			throw new Error(`Error find booking : ${error.message}`)
		}
	}
}

/* This is the function to cancel user booking */
export async function cancelBooking(bookingId) {
	try {
		const result = await api.delete(`/bookings/booking/${bookingId}/delete`)
		return result.data
	} catch (error) {
		throw new Error(`Error cancelling booking :${error.message}`)
	}
}