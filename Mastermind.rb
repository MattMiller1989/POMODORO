

class Game_board
    
    def initialize
        @@curr_board=[["O","O","O","O"],
                      ["O","O","O","O"],
                      ["O","O","O","O"],
                      ["O","O","O","O"],
                      ["O","O","O","O"],
                      ["O","O","O","O"],
                      ["O","O","O","O"],
                      ["O","O","O","O"],
                      ["O","O","O","O"],
                      ["O","O","O","O"]]
        @@helper_pegs=[["o","o","o","o"],
                       ["o","o","o","o"],
                       ["o","o","o","o"],
                       ["o","o","o","o"],
                       ["o","o","o","o"],
                       ["o","o","o","o"],
                       ["o","o","o","o"],
                       ["o","o","o","o"],
                       ["o","o","o","o"],
                       ["o","o","o","o"]]
    end
    def print_board
        (0...10).each do |n|
            puts @@curr_board[n].join("|")+"||"+@@helper_pegs[n].join(".")
        end

    end

    def put_row(row,code)
        @@curr_board[row]=code.get_pegs
    end
end

class Game_runner

    def initialize
        @my_board=Game_board.new

    end
    
end
class Code
    @@pegs=[]
    def initialize(a0,a1,a2,a3)
        # @a0=a0
        # @a1=a1
        # @a2=a2
        # @a3=a3
        @@pegs=[a0,a1,a2,a3]
    end
    def compare_code(other_code)
        
    end
    def get_pegs
        return @@pegs
    end
end

class Game_code < Code

    @@pegs=[]
    def initialize()
        
        (0...4).each do |n|
            @@pegs[n]=["R","G","B","P","Y","W"].sample
        end
    end

end

class Game_row < Code

    # def initialize(a0,a1,a2,a3)
    #     @a0=a0
    #     @a1=a1
    #     @a2=a2
    #     @a3=a3
    # end
    
end

#my_runner=Game_runner.new
my_board=Game_board.new
my_row=Game_row.new("R","G","B","Y")
my_board.put_row(1,my_row)

my_new_row=Game_row.new("B","P","G","W")
my_board.put_row(2,my_new_row)


master_code=Game_code.new
my_board.put_row(4,master_code)
my_board.print_board
