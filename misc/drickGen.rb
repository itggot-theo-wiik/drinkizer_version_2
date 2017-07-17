def main()
    drinks = IO.readlines("drinks.txt")
    milk = IO.readlines("milk.txt")

    output = []

    (drinks.length.times - 1) do |thing|
        drinks = drinks.delete("\n")
        puts thing
    end

    print drinks
    puts ""
    print milk
end

main