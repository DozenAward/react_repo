// src/pages/Page1.js
import React, { useState } from 'react';
import axios from 'axios';
import API from './api/config';

const Test = () => {
  const [type, setType] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchData = async () => {
    if (!type) return;
    setLoading(true);
    try {
      const token = localStorage.getItem('access_token'); // hoặc lấy từ context
      console.log("data token: ",token);
      console.log("API: ",API)
      const body = {
        "filter": {
            "partition_date":"20250522",
            "filters": [
                {
                    "name": "province_code",
                    "operator": "EQUAL",
                    "value": "HNI"
                }]
              }
            };

      const res = await axios.post(API.getDataByFilter(type),
      body, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setData(res.data.result.data);
    } catch (error) {
      console.error('Lỗi gọi API:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h2 className="text-xl font-bold mb-4">Chọn loại để xem dữ liệu</h2>

      <div className="mb-4">
        <select
          className="border px-3 py-2 rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">-- Chọn loại --</option>
          <option value="4">Cell 3g</option>
          <option value="5">Cell 4g</option>
          <option value="6">Cell 5g</option>
        </select>
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleFetchData}
        >
          Tải dữ liệu
        </button>
      </div>

      {loading && <p>Đang tải...</p>}

      {data.length > 0 && (
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border p-2">Tên hệ thống</th>
              <th className="border p-2">Địa chỉ</th>
              <th className="border p-2">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id_cell_4g}>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.latitude}</td>
                <td className="border p-2">{item.longitude}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Test;
