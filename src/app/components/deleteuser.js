export default function deleteuser() {

    const handleDelete = async (id: String) => {
  try {
    const res = await fetch(`/api/items/${id}`, {
      method: "DELETE",
    })

    if (!res.ok) throw new Error("Failed delete")

    // 🔥 auto refresh data
    fetchData() // kalau kamu pakai state manual
  } catch (err) {
    console.error(err)
  }
}
}