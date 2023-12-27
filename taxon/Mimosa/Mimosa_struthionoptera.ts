// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa struthionoptera
const Mimosa_struthionoptera = new Mimosa()
Mimosa_struthionoptera.specificEpithet = 'struthionoptera'

Mimosa_struthionoptera.stems = new Stems()

Mimosa_struthionoptera.stipule = new Stipule()
Mimosa_struthionoptera.stipule.margin = new MarginStipule()
Mimosa_struthionoptera.stipule.adaxial = new AdaxialStipule()
Mimosa_struthionoptera.stipule.abaxial = new AbaxialStipule()

Mimosa_struthionoptera.leaf = new Leaf()
Mimosa_struthionoptera.leaf.petiole = new Petiole()
Mimosa_struthionoptera.leaf.bipinnate = new Bipinnate()
Mimosa_struthionoptera.leaf.bipinnate.rachis = new Rachis()
Mimosa_struthionoptera.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_struthionoptera.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_struthionoptera.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(22, 24)
Mimosa_struthionoptera.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_struthionoptera.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_struthionoptera.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_struthionoptera.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(4, 8)
Mimosa_struthionoptera.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(9)
Mimosa_struthionoptera.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_struthionoptera.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_struthionoptera.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_struthionoptera.inflorescence = new Inflorescence()
Mimosa_struthionoptera.inflorescence.peduncle = new Peduncle()
Mimosa_struthionoptera.inflorescence.capitate = new CapitateInflorescence()

Mimosa_struthionoptera.flower = new Flower()
Mimosa_struthionoptera.flower.bracteole = new Bracteole()
Mimosa_struthionoptera.flower.calyx = new Calyx()
Mimosa_struthionoptera.flower.corolla = new Corolla()
Mimosa_struthionoptera.flower.corolla.shape = 'funnelform'

Mimosa_struthionoptera.androecium = new Androecium()
Mimosa_struthionoptera.androecium.filaments = new Filaments()
Mimosa_struthionoptera.androecium.filaments.colour = 'pinkish'

Mimosa_struthionoptera.ginoecium = new Ginoecium()
Mimosa_struthionoptera.ginoecium.ovary = new Ovary()

Mimosa_struthionoptera.fruit = new Fruit()
Mimosa_struthionoptera.fruit.stipe = new Stipe()
Mimosa_struthionoptera.fruit.replum = new Replum()
Mimosa_struthionoptera.fruit.epicarp = new Epicarp()

Mimosa_struthionoptera.seed = new Seed()


// Description authorship
Mimosa_struthionoptera.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_struthionoptera.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa struthionoptera
export { Mimosa_struthionoptera }