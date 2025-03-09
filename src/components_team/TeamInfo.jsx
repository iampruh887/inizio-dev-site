export default function TeamInfo({ team_name, team_description, children }) {
    return (
      <div>
        <div>
          <h2 className="text-3xl sm:text-6xl font-bold mb-4">{team_name}</h2>
          <p className="text-md">{team_description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
            {children}
          </div>
        </div>
      </div>
    );
  }
  