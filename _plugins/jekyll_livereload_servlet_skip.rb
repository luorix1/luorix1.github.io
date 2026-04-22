# frozen_string_literal: true

# Jekyll's LiveReload uses document.write() in the WEBrick handler. This overrides
# BodyProcessor#process! only. BodyProcessor lives under Jekyll::Commands::Serve
# (a sibling of Servlet, not nested inside Servlet—nesting was wrong and broke
# BodyProcessor.new with "wrong number of arguments (given 2, expected 0)").

require "jekyll/commands/serve/servlet"

module Jekyll
  module Commands
    class Serve
      class BodyProcessor
        def process!
          @new_body = []
          if @body.respond_to?(:each)
            begin
              @body.each { |line| @new_body << line.to_s }
            ensure
              @body.close
            end
          else
            @new_body = @body.lines
          end
          joined = @new_body.join
          @content_length = joined.bytesize
          @new_body = joined
          @livereload_added = false
          @processed = true
        end
      end
    end
  end
end
