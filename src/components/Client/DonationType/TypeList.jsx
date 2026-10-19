import TypeCard from "./TypeCard";
import Types from "./Types";

function TypeList({
  selectedType,
  onTypeSelect,
}) {
  return (
    <section
      className="
        mx-auto
        mt-10
        flex
        w-full
        flex-col
        gap-6

        sm:px-6

        sm:grid
        sm:grid-cols-2
      "
    >
      {Types.map((Type) => (
        <TypeCard
          key={Type.id}
          title={Type.title}
          badge={Type.badge}
          description={Type.description}
          icon={Type.icon}
          variant={Type.variant}
          selected={selectedType === Type.id}
          onSelect={() => onTypeSelect(Type.id)}
        />
      ))}
    </section>
  );
}

export default TypeList;