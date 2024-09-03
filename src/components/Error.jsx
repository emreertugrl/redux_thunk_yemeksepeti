const Error = ({ msg, retry }) => {
  return (
    <div>
      <div className="p-10 mt-20 rounded-lg text-lg text-center bg-red-100">
        <p>Üzgünüz bir hata oluştu</p>
        <p className="font-semibold">{msg}</p>
      </div>
      {retry && (
        <div className="flex justify-center my-10">
          <button onClick={retry} className="border p-2 px-4 rounded-md">
            Tekrar Dene
          </button>
        </div>
      )}
    </div>
  );
};

export default Error;
