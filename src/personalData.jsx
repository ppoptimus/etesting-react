export default function PersonalData() {
	const personal = sessionStorage.getItem('personal')
	if (personal) {
		return JSON.parse(personal)
	} else {
		return null
	}
}