import axios from 'axios'

export const BASE_URL ='http://localhost:5000/api'
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWM3NTA4ZDUwMTgxMzJjNzQwZDRhYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMTE0NzQ3MywiZXhwIjoxNzAxNDkzMDczfQ.H_ZUHBe97UbP4V-dxVRx1d5jI_yTB0f20_r5NIQDTkI"
export const PUBLIC_REQUEST = axios.create({
    baseURL: BASE_URL,
})
export const USER_REQUEST = axios.create({
    baseURL: BASE_URL,
    headers:{ token: `Bearer ${TOKEN}`},
})




