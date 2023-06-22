class TalleresDAO {
  constructor(dbClient) {
    this.db = dbClient;
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll() {
    const response = await this.db.query(
      "SELECT id, name, latitude, longitude FROM talleres order by id desc"
    );
    const rows = response[0];
    return rows;
  }

  async getById(id) {
    const response = await this.db.query(
      "SELECT id, name, latitud, longitude FROM talleres WHERE id = ?",
      [id]
    );
    const rows = response[0];
    return rows[0];
  }

  async create(taller) {
    const response = await this.db.query(
      "INSERT INTO talleres (name, latitude, longitude) VALUES (?, ?, ?)",
      [taller.title, taller.content, taller.nameuser]
    );
    const result = response[0];
    return result.insertId;
  }

  async update(taller) {
    const response = await this.db.query(
      "UPDATE taller SET name = ?, latitude = ?, longitude = ?, WHERE id = ?",
      [taller.title, taller.content, taller.nameuser]
    );
    const result = response[0];
    return result;
  }

  async delete(id) {
    const response = await this.db.query("DELETE FROM talleres WHERE id = ?", 
    [id,]);
    const result = response[0];
    return result;
  }
}

module.exports = TalleresDAO;
