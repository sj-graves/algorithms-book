import os
import glob

mbx_list = glob.glob("*.mbx")

for filename in mbx_list:
    f = open(filename,'r')
    file_contents = f.read().replace('.mbx','.xml')
    spl_fc = file_contents.split('-')
    out_contents = spl_fc[0]
    for bloc in spl_fc[1:]:
        if out_contents[-1] in '1234567890' and bloc[0] in '1234567890':
            out_contents += '_'+bloc
        else:
            out_contents += '-'+bloc
    
    f.close()
    
    f = open(filename.replace('-','_').replace('.mbx','.xml'),'w')
    f.write(out_contents)
    f.close()
