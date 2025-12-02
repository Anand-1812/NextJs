import books from "../../db";

export async function DELETE(
  request: Request,
  context: { params: { id: String } },
) {
  const id = +context.params.id;

  const indx = books.findIndex((b) => b.id === id);
  books.splice(indx, 1);

  return Response.json(books);
}
